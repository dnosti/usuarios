package com.example.taller.servicios;

import java.util.List;

import com.example.taller.modelos.Usuario;

public interface UsuarioService {
	public List<Usuario> obtenerTodos();
	public Usuario obtenerUno(Integer id);
	public Usuario agregarNuevo(Usuario user);
	public void borrarUno(Integer id);
	public void borrarTodos();
	public void modificarUno(Integer id, Usuario user);
}
