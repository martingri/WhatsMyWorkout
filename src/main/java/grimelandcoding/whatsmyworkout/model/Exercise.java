/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package grimelandcoding.whatsmyworkout.model;

import java.util.List;
import org.springframework.data.annotation.Id;

/**
 *
 * @author marting
 */
public class Exercise {

    @Id
    private String id;

    private String name;

    private List<String> muscles;

    private Integer light;

    private Integer medium;

    private Integer hard;

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

    public List<String> getMuscles() {
        return muscles;
    }

    public void setMuscles(List<String> muscles) {
        this.muscles = muscles;
    }

    public Integer getLight() {
        return light;
    }

    public void setLight(Integer light) {
        this.light = light;
    }

    public Integer getMedium() {
        return medium;
    }

    public void setMedium(Integer medium) {
        this.medium = medium;
    }

    public Integer getHard() {
        return hard;
    }

    public void setHard(Integer hard) {
        this.hard = hard;
    }

}
