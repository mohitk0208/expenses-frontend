export type TUser = {
  id: string,
  googleId: string,
  firstName: string,
  lastName?: string,
  createdAt: Date,
  photoUrl?: string,
  currentBudgetPlan?: string
}