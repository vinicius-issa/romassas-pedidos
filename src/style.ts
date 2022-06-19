const Button = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "10px"
  },
  variants: {
    solid: {
      bg: "#F8774A",
      color: "white"
    }
  }
};

const Input = {
  variants: {
    backgroundFix: {
      field: {
        bg: "white",
        border: "1px solid #ccc",
        margin: "10px 0px"
      }
    }
  },
  defaultProps: {
    variant: "backgroundFix"
  }
};

export default {
  styles: {
    global: {
      body: {
        bg: "#eee"
      }
    }
  },
  components: {
    Button,
    Input
  }
};
