function titleHandler(node) {
    const { width, height } = node.getBoundingClientRect();

    setAttributes(node, {
      width,
      height,
      src: SMALLEST_BASE64,
    });

    node.style.backgroundColor = MAIN_COLOR;
    node.style.textAlign = 'left'
}

export default titleHandler; 