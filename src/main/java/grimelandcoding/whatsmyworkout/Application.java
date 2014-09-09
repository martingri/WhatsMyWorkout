package grimelandcoding.whatsmyworkout;

import grimelandcoding.whatsmyworkout.model.Exercise;
import grimelandcoding.whatsmyworkout.repository.ExerciseRepository;
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
        repository.save(new Exercise("Alice"));
        repository.save(new Exercise("Bob"));

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

}
