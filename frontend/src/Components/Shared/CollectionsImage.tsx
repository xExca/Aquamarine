type Props = {
  src: string
}

const CollectionsImage = ({ src }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg h-full">
      <img
        src={src}
        alt="collection"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default CollectionsImage
