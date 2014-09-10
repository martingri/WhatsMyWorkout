package grimelandcoding.whatsmyworkout;

import grimelandcoding.whatsmyworkout.model.Exercise;
import grimelandcoding.whatsmyworkout.repository.ExerciseRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@EnableAutoConfiguration
public class Application implements CommandLineRunner {

    @Autowired
    private ExerciseRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        repository.deleteAll();

        // save a couple of exercises
        createExercises();

        // fetch all exercises
        System.out.println("Exercises found with findAll():");
        System.out.println("-------------------------------");
        for (Exercise exercise : repository.findAll()) {
            System.out.println(exercise);
        }
        System.out.println();

        // fetch an individual exercise
        System.out.println("Exercise found with findByFirstName('Alice'):");
        System.out.println("--------------------------------");
        System.out.println(repository.findByName("Alice"));
   }

    private void createExercises(){
            Exercise newExercise = new Exercise();
            newExercise.setName("Air squat");
            List<String> muscleList = new ArrayList<String>();
            muscleList.add("Glut");
            muscleList.add("Quads");
            newExercise.setMuscles(muscleList);
            newExercise.setLight(10);
            newExercise.setMedium(50);
            newExercise.setHard(150);
            repository.save(newExercise);
            newExercise = new Exercise();
            newExercise.setName("Push up");
            
            muscleList = new ArrayList<String>();
            muscleList.add("Chest");
            muscleList.add("Triceps");
            muscleList.add("Traps");
            newExercise.setMuscles(muscleList);
            newExercise.setLight(5);
            newExercise.setMedium(20);
            newExercise.setHard(50);
            repository.save(newExercise);
    
    }
}
