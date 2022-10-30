// list skill
export const Skill = ({ data }) => {
  return (
    <div className="mr-2">
      {data.map((listSkill) => (
        <span>{listSkill.skill}, </span>
      ))}
    </div>
  );
};
