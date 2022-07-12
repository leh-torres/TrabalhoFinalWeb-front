package web.trabalho.chatback.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web.trabalho.chatback.classes.User;
import web.trabalho.chatback.repository.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/cadastrar")
    public boolean cadastrarUser(@RequestBody User user){
        if(user.getUsersAmigos() == null){
            user.setUsersAmigos(new ArrayList<>());
        }
        if(userRepository.findByEmail(user.getEmail()) == null){
        userRepository.save(user);
        return true;
        }else{
            return false;
        }
    }

    @PostMapping("/login")
    public boolean loginUser(@RequestBody User user){
        if(userRepository.findByEmailAndPassword(user.getEmail(),user.getPassword()) != null){
        return true;
        }else{
            return false;
        }
    }

    @PostMapping("/cadastrarAmigo")
    public boolean cadastrarAmigo(@RequestHeader String email,@RequestHeader String password, @RequestBody User user){
        User userAtual = userRepository.findByEmailAndPassword(email,password);

        List<User> auxUser =  userAtual.getUsersAmigos();
        auxUser.add(user);
        userAtual.setUsersAmigos(auxUser);
        userRepository.save(userAtual);
        return true;
    }

    @GetMapping("/amigos")
    public Iterable<User> retornaAmigos(@RequestHeader String email,@RequestHeader String password){
        int id = userRepository.findByEmailAndPassword(email,password).getId();
        List<User> amigos = userRepository.findById(id).get().getUsersAmigos();
        System.out.println(id);
        List<User> amigosAux = new ArrayList<>();

        for (User amigo : amigos) {
            System.out.println(amigo.getId());
            if(userRepository.findByUsersAmigos(amigo) != null){
                amigosAux.add(amigo);
            }
        }
        return amigosAux;
    }

    @GetMapping("/pesquisaAmigos/{valor}")
    public Iterable<User> pesquisaAmigos(@RequestHeader String email,@RequestHeader String password,@PathVariable String valor){
        int id = userRepository.findByEmailAndPassword(email,password).getId();
        List<User> amigos = userRepository.findById(id).get().getUsersAmigos();
        System.out.println(id);
        List<User> amigosAux = new ArrayList<>();

        for (User amigo : amigos) {
            if(amigo.getName() == valor){
                amigosAux.add(amigo);
            }
        }
        if(amigosAux == null){
            for (User amigo : amigos) {
                if(amigo.getEmail() == valor){
                    amigosAux.add(amigo);
                }
            } 
        }
        if(amigosAux == null){
            return null;
        }else{
            return amigosAux;
        }
    }

    @GetMapping("/naoAmigos")
    public Iterable<User> retornaUsuarios(@RequestHeader String email,@RequestHeader String password){
        int id = userRepository.findByEmailAndPassword(email,password).getId();
        List<User> amigos = userRepository.findById(id).get().getUsersAmigos();
        Iterable<User> naoAmigos = userRepository.findAll();
        List<User> amigosAux = new ArrayList<>();
        boolean testa = true;

        for (User naoAmigo : naoAmigos) {
            for (User amigo : amigos) {
                if(amigo == naoAmigo){
                    testa = false;
                }
            }
            if(testa == true && naoAmigo.getId() != id){
                amigosAux.add(naoAmigo);
            }
            testa = true;
        }
        return amigosAux;
    }

    

}
