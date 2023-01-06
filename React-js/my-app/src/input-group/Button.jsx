export default function Button(props) {
    const variants = {
        info: {
            backgroundColor: "#0062ff",
            color: "#ffffff"
        }, warning: {
            backgroundColor: "#fff706",
            color: "#000"
        }, success: {
            backgroundColor: "#53ff04",
            color: "#000"
        }, error: {
            backgroundColor: "#ff0000",
            color: "#ffffff"
        },
    };
    const sizes = {
        small: {
            padding: "5px 10px",
            fontSize: "0.8rem"
        }, 
        medium: {
            padding: "10px 15px",
            fontSize: "1rem"
        }, 
        large: {
            padding: "15px 20px",
            fontSize: "1.2rem"
        },
};

    const userVariant = variants[props.variant];
    const userSize = sizes[props.size]
    return <button type={props.type} style={{
                border:"1px solid #000",
                padding:"15px 25px",
                borderRadius:"5px",
                backgroundColor:"#fefeae",
                outline:"none",
                fontSize: "1rem",
                fontWeight: "600",
                margin: "1rem",
                cursor: "pointer",
                ...userVariant,
                ...userSize

    }}> {props.label} </button>  
      
}