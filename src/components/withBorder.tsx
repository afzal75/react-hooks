const withBorder = (WrappedComponenet) => {
    return (propd) => (
        <div className="border-2 border-purple-500 border-rounded">
            <WrappedComponenet />
        </div>
    )
}

export default withBorder