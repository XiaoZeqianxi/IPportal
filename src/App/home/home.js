import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Home = () => {
    return (
        <>
            <div>
                <Flex align={"center"} justify={"center"}>
                    <input placeholder="please input something..."></input>
                    <Button>
                        <MagnifyingGlassIcon />
                    </Button>
                </Flex>
            </div>
            <div>
                <Flex direction={"row"} justify={"center"} align={"center"}>
                    <Card asChild>
                        <Text>
                            card 1
                        </Text>
                    </Card>
                    <Card asChild>
                        <Text>
                            card 2
                        </Text>
                    </Card>
                    <Card asChild>
                        <Text>
                            card 3
                        </Text>
                    </Card>
                    <Card asChild>
                        <Text>
                            card 4
                        </Text>
                    </Card>
                    <Card asChild>
                        <Text>
                            card 5
                        </Text>
                    </Card>
                    <Card asChild>
                        <Text>
                            card 6
                        </Text>
                    </Card>
                </Flex>
            </div>
            <div>
                <Flex gap="3" direction={"row"} align={"center"} justify={"center"}>
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
            </div>
        </>
    );
}

export default Home;