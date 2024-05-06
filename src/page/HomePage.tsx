import { useQuery } from "react-query"
import { getSpell } from "../api/spell"
import { Box } from "@mui/material";
import { cardType } from '../@types/index';
import BasicCard from "../components/card";
import { Layout } from "./Layout";
import SkeletionLoading from "../components/loading/skeletionLoading";

const HomePage = () => {
    const {data, isLoading, isSuccess, isError, refetch}=useQuery('get-spell', getSpell);

    console.log("isLoading", isLoading)
    return (
        <Layout>

                <div className="card-display">
                    {isLoading ? (
                        // <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>

                            <SkeletionLoading />
                     
                    ):(<>
                    
                    {data?.results?.map((data:cardType, index:number)=>(


                        <Box sx={{padding:'10px'}} key={index}>
                           

                            <BasicCard data={data} />
                            
                        </Box>
                    ))}
                    </>)}
                </div>
        </Layout>

    )
}

export default HomePage
