function cunstomRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue; // Skip children as it's already handled
        }
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href : "https://google.com",
        target: "_blank",
    },
    children: "Click me to go to Google",
}

const mainContainer = document.querySelector('#root');

cunstomRender(reactElement, mainContainer);