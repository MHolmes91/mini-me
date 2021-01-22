export const Description = ({ description }) => {
  return Array.isArray(description)
    ? description.map((str) => (
        <>
          {str}
          <br />
        </>
      ))
    : description;
};
