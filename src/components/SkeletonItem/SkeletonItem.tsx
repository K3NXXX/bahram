import ContentLoader from "react-content-loader"

const SkeletonItem = () => (
  <ContentLoader 
    speed={2}
    width={246}
    height={158}
    viewBox="0 0 1100 750"
    backgroundColor="#ededed"
    foregroundColor="#c2c2c2"
  >
    <rect x="34" y="82" rx="0" ry="0" width="1100" height="750" />
  </ContentLoader>
)

export default SkeletonItem
