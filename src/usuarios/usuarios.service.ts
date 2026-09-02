import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor' | 'auditor';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  papel: Papel;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Ana Lima',
      email: 'ana@empresa.com',
      senhaHash: '$2b$12$BHvjuSO.qK6SVROfR.VeHO8KpokP.h6R84wGW.EvQemoc1jH4vd/i',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Bruno Silva',
      email: 'bruno@empresa.com',
      senhaHash: '$2b$12$BHvjuSO.qK6SVROfR.VeHO8KpokP.h6R84wGW.EvQemoc1jH4vd/i',
      papel: 'solicitante',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Carla',
      email: 'carla@empresa.com',
      senhaHash: '$2b$12$BHvjuSO.qK6SVROfR.VeHO8KpokP.h6R84wGW.EvQemoc1jH4vd/i',
      papel: 'auditor',
      ativo: true,
    },
    {
      id: 4,
      nome: 'Pedro',
      email: 'pedro@empresa.com',
      senhaHash: '$2b$12$kmjSFAcmCxCJGbR1QhgI4eFglJOCzXzMm6cYU3j5jBDPgpcufmS9q',
      papel: 'gestor',
      ativo: true
    },
    {
      id: 5,
      nome: 'Fonseca',
      email: 'fonseca@empresa.com',
      senhaHash: '$2b$12$xjfvdRZayP4bICDEcqJTT.Gbz71FU.VPrHxMBNkPmWtvBru7PZyPS',
      papel: 'auditor',
      ativo: true
    }
  ];

  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}