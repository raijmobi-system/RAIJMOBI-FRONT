"use client"

import {FrameComponent} from "@/components/organisms";
import { Button, Link, IconButton } from '@/components/atoms/action';
import { Flex } from '@/styled-system/jsx';
import { Icon } from '@/components/atoms/presentation';
import { Text } from '@/components/atoms/typography';
import { Avatar } from '@/components/atoms/presentation';
import {CardComponent} from '@/components/molecules'



export default function ChatPage() {
    return (
        <FrameComponent>
            <CardComponent 
            Image={<Avatar src='public/cliente.jpeg'/>} 
            content={<Flex direction="column">
                <Text>Chat Message</Text>
                <Text>última Mensagem</Text>
            </Flex>}
            extraContent={<Text>14:25</Text>}
            direction="row"
            />
        </FrameComponent>
    );
}
     


 