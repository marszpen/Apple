import NavBar from "../NavBar/NavBar";
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";

const NotFound = () => {
    return (
        <div>
            <Container>
                <PageTitle className={style.notfound}>404 NOT FOUND</PageTitle>
            </Container>
        </div>
    );
};

export default NotFound;