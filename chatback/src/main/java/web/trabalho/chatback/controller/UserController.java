package web.trabalho.chatback.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
    public String cadastrarUser(@RequestBody User user){
        if(user.getUsersAmigos() == null){
            user.setUsersAmigos(new ArrayList<>());
        }
        if(userRepository.findByEmail(user.getEmail()) == null){
        userRepository.save(user);
        return "Salvado com sucesso!";
        }else{
            return "email já cadastrado!";
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

}
