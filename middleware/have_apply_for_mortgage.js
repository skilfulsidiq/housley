export default function ({
  redirect,
  store
}) {
  const user = store.state.auth.user;
  if (user.have_request == 1) {
    redirect({
      name: 'have-mortgage'
    })
  }
}
