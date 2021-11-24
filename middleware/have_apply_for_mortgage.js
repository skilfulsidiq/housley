export default function ({
  redirect,
  store
}) {
  const user = store.state.auth.user;
  if (user.have_apply_for_mortgage == 1) {
    redirect({
      name: 'have-mortgage'
    })
  }
}
