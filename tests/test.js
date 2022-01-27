const request = require('supertest')


afterEach(() => {
    jest.clearAllMocks();
  });
  

describe("Plats", () => {

    // Récuperation de tous les plats
    it('GET /all should return 200 response', async () => {
        const res = await request("localhost:8080").get('/all');
        expect(res.status).toBe(200)
    });

    // Récuperation de la carte 
    it('GET /dispo should return 200 response', async () => {
        const res = await request("localhost:8080").get('/dispo');
        expect(res.status).toBe(200)
    });

    // Ajout d'un plat
    it('POST /add should return 200 response', async () => {
        const res = await request("localhost:8080")
            .post("/add")
            .send(
                {
                    name: 'Sandwich',
                    description: 'Pain',
                    type: 'plat',
                    prix: 30,
                    quantite: 4

                }
            )
        expect(res.status).toBe(201);
    })

    // Modification d'un plat 
    it('PUT /edit plat should return 200 response', async () => {
        const res = await request("localhost:8080")
            .put("/edit")
            .send(
                {
                    name: "Salade Cesar",
                    quantite: 8
                }
            )
        expect(res.status).toBe(200);
    })

    // Test d'ajout d'un plat existant 
    it('POST /add should return 400 response', async () => {
        const res = await request("localhost:8080")
            .post("/add")
            .send(
                {
                    name: 'Salade Cesar',
                    description: 'Salade Vegan',
                    type: 'plat',
                    prix: 30,
                    quantite: 4
                }
            )
        expect(res.status).toBe(412);
    })

})