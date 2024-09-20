import { Button, Card, Box } from "@mui/material";
import { useState } from "react";


export default function MainContent() {
	let [counter, setCounter] = useState(0)
	return (
		<>
			<Card>
				<Box >
					<Button onClick={() => setCounter(counter+1)}>
						content = {counter}
					</Button>
				</Box>
			</Card>
		</>
	)
	
}