const LocalVar = artifacts.require("LocalVar");

contract("LocalVar", () => {
  it("Should initialise the local variable", async () => {
    const localVar = await LocalVar.deployed();
    const result = await localVar.getLocal();
    assert(result.toNumber() === 10);
  });
});
