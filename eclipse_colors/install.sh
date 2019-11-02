#!/bin/bash
if [ ! -z $1 ]; then
  cp org.eclipse.jdt.ui.prefs $1/.metadata/.plugins/org.eclipse.core.runtime/.settings/
  cp org.eclipse.ui.editors.prefs $1/.metadata/.plugins/org.eclipse.core.runtime/.settings/
  cp org.eclipse.wst.jsdt.ui.prefs $1/.metadata/.plugins/org.eclipse.core.runtime/.settings/
else
  echo "Usage:"
  echo "./install.sh {workspace_directory}"
fi
