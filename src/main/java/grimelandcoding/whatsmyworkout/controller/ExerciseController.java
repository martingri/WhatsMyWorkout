package grimelandcoding.whatsmyworkout.controller;

import grimelandcoding.whatsmyworkout.model.Exercise;
import grimelandcoding.whatsmyworkout.repository.ExerciseRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping (value = "/exercises",
                 produces = MediaType.APPLICATION_JSON_VALUE)
public class ExerciseController {

    @Autowired
    private ExerciseRepository repository;
 
    @RequestMapping (method = RequestMethod.DELETE, value = "/{exerciseId}")
    @ResponseBody void deleteExercise(@PathVariable String exerciseId) {
        repository.delete(exerciseId);
    }
 
    @RequestMapping (method = RequestMethod.GET, value = "/{exerciseId}")
    @ResponseBody Exercise getExercise(@PathVariable String exerciseId) {
        return repository.findById(exerciseId);
    }
  
    @RequestMapping (method = RequestMethod.POST, value = "")
    public void addExercise(@PathVariable String name) {
        Exercise exercise = new Exercise(name);
        repository.save(exercise);
    }
    
    @RequestMapping (method = RequestMethod.PUT, value = "/{exerciseId}/{name}")
    public void updateExercise(@PathVariable String exerciseId, @PathVariable String name) {
        Exercise exercise = repository.findById(exerciseId);
        exercise.setName(name);
        repository.save(exercise);
    }

    @RequestMapping (method = RequestMethod.GET, value = "")
    public List<Exercise> getAllExercises() {
        List<Exercise> exerciseList = repository.findAll();
        return exerciseList;
    }
    
}