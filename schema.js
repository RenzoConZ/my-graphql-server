import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Cliente {
    id: ID
    nombre: String
    apellido: String
    empresa: String
    emails: [Email]
    edad: Int
    tipo: TipoCliente
    pedidos: [Pedido]
  }
  type Email {
    email: String
  }
  type Pedido {
    producto: String
    precio: Float
  }
  enum TipoCliente {
    BASICO
    PREMIUM
  }
  type Query {
    cliente: Cliente
    getCliente(id: ID): Cliente
  }
  input EmailInput {
    email: String
  }
  input PedidoInput {
    producto: String
    precio: Float
  }
  input ClienteInput {
    id: ID
    nombre: String!
    apellido: String!
    empresa: String!
    emails: [EmailInput]
    edad: Int!
    tipo: TipoCliente!
    pedidos: [PedidoInput]
  }
  # Para comentar ó ignorar codigo 
  """ Mutations para crear nuevos clientes"""
  type Mutation {
    # Para comentar ó ignorar codigo
    """ Te permite crear nuevos clientes"""
    crearCliente(input: ClienteInput): Cliente
  }
`);

export default schema;