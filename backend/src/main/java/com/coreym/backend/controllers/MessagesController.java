package com.coreym.backend.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessagesController {

	@GetMapping("/messages")
	public ResponseEntity<List<String>> messages() {
		return ResponseEntity.ok(Arrays.asList("First", "Second", "Third"));
	}
}
