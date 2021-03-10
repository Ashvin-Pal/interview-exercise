import { FlowerSpinner } from "react-epic-spinners";
import { Box } from "grommet";

const LoadingIndicator = () => {
    return (
        <Box alignSelf="center" alignContent="center" margin="xlarge" pad="xlarge">
            <FlowerSpinner color="black" size={98} />
        </Box>
    );
};

export default LoadingIndicator;
