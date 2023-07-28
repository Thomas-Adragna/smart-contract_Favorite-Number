const FavoriteNumber = artifacts.require("./FavoriteNumber");

contract("FavoriteNumber", accounts => {
    it("should change the nbre favoris dans la bc", async function() {
        const Contract = await FavoriteNumber.deployed();
        const result = await Contract.setFavoriteNumber(47, {from: accounts[0]})
    })

    it("should change the nbre favoris dans la bc", async function() {
        const Contract = await FavoriteNumber.deployed();
        const result = await Contract.getFavoriteNumber();
        assert.equal(result.words[0], 47, "not equal to 47");
    })
})