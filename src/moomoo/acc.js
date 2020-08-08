import acc from "../acc.json"

function getAcc(id: number) {
    return acc.find(hat => acc.id == id);
}

export { getAcc };
