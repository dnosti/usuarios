package com.example.taller.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.taller.modelos.Usuario;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuario, Integer>{

}
