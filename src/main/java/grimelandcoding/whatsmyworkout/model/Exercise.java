/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package grimelandcoding.whatsmyworkout.model;

import org.springframework.data.annotation.Id;

/**
 *
 * @author marting
 */
public class Exercise {

    @Id
    private String id;

    private String name;
    
    public Exercise() {}

    public Exercise(String name) {
        this.name = name;
    }
    
    @Override
    public String toString() {
        return String.format(
                "Exercise[id=%s, name='%s']",
                id, name);
    }
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
