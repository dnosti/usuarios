package com.example.taller.servicios;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.taller.modelos.Usuario;
import com.example.taller.repositories.UsuariosRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuariosRepository repo;
	
	public List<Usuario> obtenerTodos() {
		return repo.findAll();
	}

	public Usuario obtenerUno(Integer id) {
		return repo.findById(id).orElse(null);
	}
	
	public Usuario agregarNuevo(Usuario user) {
		return repo.save(user);
	}

	public void borrarUno(Integer id) {
		repo.deleteById(id);
	}

	public void borrarTodos() {
		repo.deleteAll();
	}

	public void modificarUno(Integer id, Usuario user) {		
		Usuario aux = repo.findById(id).orElse(null);
		if (aux != null) {
			aux.setNombre(user.getNombre());
			aux.setApellido(user.getApellido());
			repo.save(aux);	
		}
	}
}
