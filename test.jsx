

<Container>
    {articles.map(article => {
        return <ul className="list-unstyled">
            <Media as="li">
                <Media.Body>
                    <h5>
                        {article.title}
                    </h5>
                    <p>
                        {`by ${article.author}`}
                    </p>
                </Media.Body>
                <Button>Like ({article.votes})</Button>
            </Media>
        </ul>
    })}
</Container>