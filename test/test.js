const customERC20 = artifacts.require("customERC20");

contract("customERC20", accounts => {
        console.log(accounts);

        it("name", async () => {
            let instance = await customERC20.deployed();
            let name = await instance.name.call();
            assert.equal(name, "Joan");

        });

        it("symbol", async () => {
            let instance = await customERC20.deployed();
            let symbol = await instance.symbol.call();
            assert.equal(symbol, "JA");
        })

        
        it("decimals", async () => {
            let instance = await customERC20.deployed();
            let _decimals = await instance.decimals.call();
            assert.equal(_decimals, 18);
        })

        it("newtokens", async () => {
            let instance = await customERC20.deployed();
            
            let _initial_supply = await instance.totalSupply.call();
            assert.equal(_initial_supply, 0);

            await instance.crearTokens();

            let _supply = await instance.totalSupply.call();
            assert.equal(_supply, 1000);

            let _balance = await instance.balanceOf(accounts[0]);
            assert.equal(_balance, 1000);
        })
    }       
)