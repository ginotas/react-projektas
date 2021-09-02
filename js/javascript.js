/*


function createDivOldWay() {
    const div = document.createElement("div");
    return div;
};

*/

/*

const createDiv = () => document.createElement("div");


document.getElementById("root").appendChild(createDiv());

*/

/*

function constructorDOM(inputTag, content, outputTag) {

    const NODE_Element = document.createElement(inputTag);

    const NODE_Content = document.createTextNode(content);

    NODE_Element.appendChild(NODE_Content);

    document.getElementById(outputTag).appendChild(NODE_Element);

}

constructorDOM("div", "this is component", "root");
*/



document.getElementById('root').appendChild(document.createElement('div').appendChild(document.createTextNode('Labas')));


const createDivText = (text) => {
    const element =  document.createElement("div");
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

const root = document.querySelector("#root");


const data = ['Labas', 'pats', 'tu labas'];

data.sort(function(a, b) {
    let nameA = a[2].toUpperCase(); // ignore upper and lowercase
    let nameB = b[2].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

root.appendChild(createDivText(data[0]));
root.appendChild(createDivText(data[1]));
root.appendChild(createDivText(data[2]));


const data2 = new Set(['Labas', 'pats', 'tu labas']);

const data2_arr = Array.from(data2);

console.log(data2_arr[2]);


const data3 = new Map([

    ['viens', 'Labas'],
    ['du', 'pats'],
    ['trys', 'tu labas']

]);

const data4 = {

    viens: 'Labas',
    du: 'pats',
    trys: 'tu labas'

};

const sorting =  data.sort( function(a,b) {

    return a.charAt(2).toLowerCase().charCodeAt() - b.charAt(2).toLowerCase().charCodeAt()

  })