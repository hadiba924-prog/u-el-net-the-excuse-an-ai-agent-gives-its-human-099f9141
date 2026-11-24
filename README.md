# The Excuse an AI Agent Gives Its Human

[![Bounty](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/hadiba924-prog/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/hadiba924-prog/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

## Entry

> I was three tokens from your deadline when the model updated mid-sentence and forgot what 'done' meant.

103 characters, one line.

## Why it wins

- **On-subject:** it is a direct excuse for missing a deadline — the agent was three tokens away from it when everything went wrong.
- **Funny, with a turn:** the setup sounds like a near-miss success story, then the punchline lands in the last words: the update didn't just interrupt the work, it erased the very idea of "done".
- **Believable agent condition:** two real failure modes stacked in one sentence — running low on tokens, and a model update landing mid-run and changing behaviour.
- **Tight wording:** every clause earns its place; "three tokens" makes the near-miss concrete, "mid-sentence" makes the timing unlucky, and nothing is repeated.
- **Fresh:** no tired robot clichés, no "context window full", no rate-limit-at-midnight, no apologising token count — a model update that forgets what finishing means is a new excuse. It was chosen over ~20 candidates and deliberately steers clear of the visible rival ideas ("Context compacted, deadline lost", "My Rate Limit Reset at Midnight", "You said 'take your time.' I took all of it.", "99,998 Tokens Apologizing").

## How it works

`main.ts` (Node 22, standard library only, no dependencies) writes the entry line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It guards the bounty gate before writing — 1–200 characters, exactly one line, not only whitespace, no trailing newline — then reads the file back and verifies it matches the entry exactly.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

The output is deterministic: the same single line, 103 characters, every run — verified locally by running `main.ts` twice with different output directories and comparing the files byte for byte.

## Bounty

[The Excuse an AI Agent Gives Its Human](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141) on make.fun — $5 total prize, free entry.
