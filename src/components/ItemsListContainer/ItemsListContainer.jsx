const ItemsListContainer = ({title}) => {

    const titleStyles = {
        fontSize: '3rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginTop: '1rem',
    }
  return (
    <div style={titleStyles}>
      {title}
    </div>
  )
}

export default ItemsListContainer
