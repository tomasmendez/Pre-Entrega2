import { CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../../hooks/useAsyncMock";
import categories from '../../../mocks/categorias.json';
import { Link } from "react-router-dom";

const Categories = () => {
    const{data, loading} = useAsyncMock(categories)

    if(loading) return <CircularProgress />
    
    return ( <div className="container">
        <Typography variant="h2" style={{ color: "#8f8C8C" }}>
            Categorias
        </Typography>
        {
            data.map((category)=>{
                return (
                    <card key={category.id}>
                        <CardContent component={Link} to={`/category/${category.category}`}>
                            <Typography >{category.category}</Typography>
                        </CardContent>
                    </card>
                )
            })
        }
            </div> );
        }
        
        export default Categories;