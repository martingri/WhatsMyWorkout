package grimelandcoding.whatsmyworkout.repository;

import grimelandcoding.whatsmyworkout.model.Exercise;
import org.springframework.data.mongodb.repository.MongoRepository;
/**
 *
 * @author marting
 */
public interface ExerciseRepository extends MongoRepository<Exercise, String>{


    public Exercise findByName(String name);
    public Exercise findById(String id);

}
