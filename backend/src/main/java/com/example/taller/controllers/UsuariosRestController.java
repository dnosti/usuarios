package com.example.taller.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.taller.servicios.UsuarioService;
import com.example.taller.modelos.Usuario;

@RestController
public class UsuariosRestController {
	
	@Autowired
	private UsuarioService service;

	public UsuariosRestController() {}
	
	@CrossOrigin
	@GetMapping("/usuarios")
	public List<Usuario> obtenerTodos() {
		return service.obtenerTodos();
	}
	
	@CrossOrigin
	@GetMapping("/usuarios/{id}")
	public Usuario obtenerUno(@PathVariable Integer id) {
		return service.obtenerUno(id);
	}

	@CrossOrigin
	@PostMapping("/usuarios")
	public Usuario agregarNuevo(@RequestBody Usuario user) {
		return service.agregarNuevo(user);
	}

	@CrossOrigin
	@DeleteMapping("/usuarios/{id}")
	public void borrarUno(@PathVariable Integer id) {
		service.borrarUno(id);
	}

	@CrossOrigin
	@DeleteMapping("/usuarios")
	public void borrarTodos() {
		service.borrarTodos();
	}

	@CrossOrigin
	@PutMapping("usuarios/{id}")
	public void modificarUno(@PathVariable Integer id, @RequestBody Usuario user) {
		service.modificarUno(id, user);
	}
}
