import exprress from 'express';

const app = exprress();

const port = process.env.PORT || 3010;

app.listen(port, () => {
    console.log(`serverul ruleaza...\n  port: ${port}`);
});
