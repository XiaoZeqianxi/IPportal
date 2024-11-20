import React from "react";
import { Box } from "@radix-ui/themes";

const Footer = () => {
    return (
            <Box as="footer" width="100%" height="50px" style={{
                backgroundColor: "#fff",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                footer
            </Box>
    );
}

export default Footer;