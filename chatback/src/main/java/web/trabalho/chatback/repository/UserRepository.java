package web.trabalho.chatback.repository;

import org.springframework.data.repository.CrudRepository;

import web.trabalho.chatback.classes.User;

public interface UserRepository extends CrudRepository<User,Integer>{
 
    User findByEmail(String email);

    User findByEmailAndPassword(String email,String password);

    User findByUsersAmigos(User usersAmigos);
    
}
