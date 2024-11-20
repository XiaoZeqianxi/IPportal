import React from "react";
import { Flex, Box, Button } from "@radix-ui/themes";

const Header = () => {
    return (
        <Flex align={"center"} justify="between" gap="4" direction={'row'} width={"100%"}>
            <Box>
                <Button>
                    知产平台
                </Button>
            </Box>
            <Flex gap="3" direction={"row"} align={"end"}>
                <Box width="64px" height="64px">
                    <Button style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        注册
                    </Button>
                </Box>
                <Box width="64px" height="64px">
                    <Button style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        查询
                    </Button>
                </Box>
                <Box width="64px" height="64px">
                    <Button style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        政策
                    </Button>
                </Box>
                <Box width="64px" height="64px">
                    <Button style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        市场
                    </Button>
                </Box>
                <Box width="64px" height="64px">
                    <Button style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        登录
                    </Button>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Header;
