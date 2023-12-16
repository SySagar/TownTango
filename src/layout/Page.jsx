import { Stack } from "@mui/material"
import { motion} from "framer-motion"


const variants= {
	hidden: {
		opacity: 0
	},
	enter: {
		opacity: 1,
		transition: {
			duration: 0.5,
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
		}
	}
}

// eslint-disable-next-line react/prop-types
const Page = ({ children })=> {
	return (
		<Stack
			component={motion.main}
			variants={variants}
			initial='hidden'
			animate='enter'
			exit='exit'
			transition={{
				ease: 'linear'			
			}}
			flexGrow={1}
		>
			{ children }
		</Stack>
	)
}

export default Page