import { Box, Flex, Progress, RadioCards, Strong, Text } from "@radix-ui/themes";
import React from "react";

const Register = () => {
    return (
        <>
            <div style={{
                justifyItems: "center",
                alignItems: "center"
            }}>
                <Box width={"60%"} height={"32px"}>
                    <Progress value={75} />
                </Box>
            </div>
            <div>
                <Flex direction={"row"} justify={"center"} align={"center"}>
                    <RadioCards.Root columns={{ initial: "1", sm: "3" }} gap="9">
                        <RadioCards.Item value="copyright">
                            <Text weight="bold" align={"center"}>Copyright</Text>
                        </RadioCards.Item>
                        <RadioCards.Item value="patent">
                            <Text weight="bold" align={"center"}>Patent</Text>
                        </RadioCards.Item>
                        <RadioCards.Item value="trademark">
                            <Text weight="bold" align={"center"}>Trademark</Text>
                        </RadioCards.Item>
                    </RadioCards.Root>
                </Flex>
            </div>
            <div>
                <Flex direction={"column"}>
                    <Flex direction={"row"}>
                        <Strong>[%data1%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data2%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data3%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data4%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data5%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data6%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data7%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data8%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data9%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data10%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data11%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data12%]</Strong>
                        <input></input>
                    </Flex>
                    <Flex direction={"row"}>
                        <Strong>[%data13%]</Strong>
                        <input></input>
                    </Flex>
                </Flex>
            </div>
            <div>
                step 3: place an input box or upload box for original file url or upload to db
            </div>
            <div>
                step 4: place a review page of info inputted
            </div>
            <div>
                place a submit button after step 4
            </div>
            <div>
                return a success / failure page of submission
            </div>
        </>
    );
}

export default Register;