package web.trabalho.chatback.classes;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
    
    @Id
    @GeneratedValue
    private int id;
    private String name;
    @Column(unique = true)
    private String email;
    private String password;
    private String imageUrl;

    @ElementCollection
    private List<User> usersAmigos = new ArrayList<>();

    public User(){
        
    }

    public User(int id, String name, String email, String password, String imageUrl, List<User> usersAmigos) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.imageUrl = imageUrl;
        this.usersAmigos = usersAmigos;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public List<User> getUsersAmigos() {
        return usersAmigos;
    }

    public void setUsersAmigos(List<User> usersAmigos) {
        this.usersAmigos = usersAmigos;
    }

}
