const config = {
  extends: ["@commitlint/config-conventional"],
};

// Format: <type>(<scope>): <subject>
// feat(auth): add refresh token rotation
// fix(cart): correct total price calculation on discount
// docs(readme): update lefthook setup instructions
// style(header): fix indentation in Navbar.tsx
// refactor(api): extract fetch logic into custom hook
// perf(product-list): memoize filtered results with useMemo
// test(checkout): add unit test for coupon validation
// build(deps): upgrade next to 15.1.0
// ci(github-actions): add lint step to pull_request workflow
// chore: update .gitignore for .env.local
// revert: feat(auth): add refresh token rotation

export default config;
