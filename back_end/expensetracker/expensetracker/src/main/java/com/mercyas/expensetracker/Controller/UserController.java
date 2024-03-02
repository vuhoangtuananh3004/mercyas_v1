package com.mercyas.expensetracker.Controller;

import com.mercyas.expensetracker.DAOClass.UserService;
import com.mercyas.expensetracker.model.Expense;
import com.mercyas.expensetracker.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public User getUser(@PathVariable Long userId){
        return Optional.of(userService.getUserById(userId)).orElse(null);
    }

    @PostMapping
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping("/{userId}/expenses")
    public List<Expense> getAllExpensesByUserId(@PathVariable Long userId){return Optional.of(userService.getAllExpenseByUserId(userId)).orElse(null);}
}
