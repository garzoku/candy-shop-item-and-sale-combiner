function getItemById(items, itemID){
    return items.find(element => element.id === itemID)
}

function buildTransactions(sales, items){
        return sales.map((element) => {
        let currentItem = items.find(e => e.id === element.itemId)
            if(element.itemId === currentItem.id){
                return{...element, price: currentItem.price, description: currentItem.description}
            }
    })   

}

function getTransactionsByItemDescription(transactions, itemDescription){
    return list = transactions.filter(e => e.description === itemDescription)
}

module.exports = {
    // Uncomment these as you write them
     getItemById,
     buildTransactions,
     getTransactionsByItemDescription
}
