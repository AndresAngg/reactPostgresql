import index from '../src/controller/index.controller'

describe('Pruebas a index.controler consultas data base', () => {
    it('Obtener todos los usuarios', ()=>{
        const a = index.getUsers()
        expect(a).toBeDefined()
    })
})